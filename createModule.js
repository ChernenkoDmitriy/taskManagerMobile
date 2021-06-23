const fs = require('fs');
const PATH = "./modules/";
const MODULE_NAME = process.argv[2];
const USE_CASES = process.argv[3]?.split('-');
const MODULE_NAME_CLASS = MODULE_NAME[0].toLocaleUpperCase() + MODULE_NAME.slice(1);

async function createFolders() {
    await fs.mkdir(PATH + MODULE_NAME, () => { });
    await fs.mkdir(PATH + MODULE_NAME + "/factory", () => { });
    await fs.mkdir(PATH + MODULE_NAME + "/presenter", () => { });
    await fs.mkdir(PATH + MODULE_NAME + "/ui", () => { });
    await fs.mkdir(PATH + MODULE_NAME + "/useCases", () => { });
    await fs.mkdir(PATH + MODULE_NAME + "/api", () => { });
}

async function createUiFiles() {
    const styles = `import { StyleSheet } from 'react-native';
import { IColors } from '../../../src/colorTheme';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.background,
        },
    });
    return styles;
}
`;

    const index = `import { connector } from '../../../src/connector/Connector';
import { ${MODULE_NAME_CLASS}View } from './component';

export const ${MODULE_NAME_CLASS}Screen = connector.connect(${MODULE_NAME_CLASS}View, '${MODULE_NAME}Presenter');
`;

    const component = `import React, { FC, useMemo } from 'react';
import { View } from 'react-native';
import { IStackNavigation } from '../../../src/navigation/INavigation/IStackNavigation';
import { getStyle } from './styles';
import { IColors } from '../../../src/colorTheme';
import { I${MODULE_NAME_CLASS}Presenter } from '../presenter/I${MODULE_NAME_CLASS}Presenter';

interface Props {
    navigation: IStackNavigation;
    colors: IColors;
    t: (key: string) => string;
    ${MODULE_NAME}Presenter: I${MODULE_NAME_CLASS}Presenter;
}

export const ${MODULE_NAME_CLASS}View: FC<Props> = ({ navigation, colors, t, ${MODULE_NAME}Presenter:{state, controller} }) => {
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <View style={styles.container}>

        </View>
    )
}
`;
    await fs.writeFile(PATH + MODULE_NAME + "/ui/styles.ts", styles, () => { });
    await fs.writeFile(PATH + MODULE_NAME + "/ui/index.ts", index, () => { });
    await fs.writeFile(PATH + MODULE_NAME + "/ui/component.tsx", component, () => { });
}

async function createPresenterFiles() {
    let useCases = ``;
    let imports = ``;
    USE_CASES?.forEach(useCase => {
        const useCaseClass = useCase[0].toLocaleUpperCase() + useCase.slice(1);
        imports += `import { I${useCaseClass}UseCase } from "../useCases/${useCaseClass}UseCase";
        `

        useCases += `private ${useCase}UseCase: I${useCaseClass}UseCase,
        `
    });
    const controller = `import { I${MODULE_NAME_CLASS}State } from "./${MODULE_NAME_CLASS}State";
${imports}
export interface I${MODULE_NAME_CLASS}Controller {

}

export class ${MODULE_NAME_CLASS}Controller implements I${MODULE_NAME_CLASS}Controller {
    constructor(
        private state: I${MODULE_NAME_CLASS}State,
        ${useCases}
    ) { }

}
`;

    const presenter = `import { I${MODULE_NAME_CLASS}Controller } from "./${MODULE_NAME_CLASS}Controller";

export interface I${MODULE_NAME_CLASS}Presenter {
    controller: I${MODULE_NAME_CLASS}Controller;
    state: {  

    };
}
`;

    const state = `import { IRepository } from "../../common/repository/IRepository";

export interface I${MODULE_NAME_CLASS}State {

}

export class ${MODULE_NAME_CLASS}State implements I${MODULE_NAME_CLASS}State {
    constructor(

    ) { }

}
`;

    await fs.writeFile(PATH + MODULE_NAME + "/presenter/" + MODULE_NAME_CLASS + "State.ts", state, () => { });
    await fs.writeFile(PATH + MODULE_NAME + "/presenter/" + MODULE_NAME_CLASS + "Controller.ts", controller, () => { });
    await fs.writeFile(PATH + MODULE_NAME + "/presenter/I" + MODULE_NAME_CLASS + "Presenter.ts", presenter, () => { });
}

async function createUseCasesFiles() {
    USE_CASES?.forEach(async useCase => {
        const useCaseClass = useCase[0].toLocaleUpperCase() + useCase.slice(1);
        const useCaseFile = `export interface I${useCaseClass}UseCase {
    ${useCase}: () => Promise<void>;
}

export class ${useCaseClass}UseCase implements I${useCaseClass}UseCase {
    constructor(

    ) { }

    ${useCase} = async () => {
        try {

        } catch (error) {
            console.warn('${useCaseClass}UseCase -> ${useCase}: ', error);
        }
    }

}
`;
        await fs.writeFile(PATH + MODULE_NAME + "/useCases/" + useCaseClass + "UseCase.ts", useCaseFile, () => { });
    })
}

async function createFactoryFiles() {
    let useCases = ``;
    let imports = ``;
    let paramsForPresenter = ``;
    USE_CASES?.forEach(useCase => {
        const useCaseClass = useCase[0].toLocaleUpperCase() + useCase.slice(1);
        imports += `import { ${useCaseClass}UseCase } from "../useCases/${useCaseClass}UseCase";
`;

        useCases += `const ${useCase}UseCase = new ${useCaseClass}UseCase(  );
`;

        paramsForPresenter += `${useCase}UseCase, `
    });
    const factory = `import { I${MODULE_NAME_CLASS}Presenter } from "../presenter/I${MODULE_NAME_CLASS}Presenter";
import { ${MODULE_NAME_CLASS}Controller } from "../presenter/${MODULE_NAME_CLASS}Controller";
import { ${MODULE_NAME_CLASS}State } from "../presenter/${MODULE_NAME_CLASS}State";
${imports}
export class ${MODULE_NAME_CLASS}Factory {
    private static presenter: I${MODULE_NAME_CLASS}Presenter;

    static get() {
        if (!${MODULE_NAME_CLASS}Factory.presenter) {
            ${MODULE_NAME_CLASS}Factory.presenter = new ${MODULE_NAME_CLASS}Factory().createPresenter();
        }
        return ${MODULE_NAME_CLASS}Factory.presenter;
    }

    private createPresenter = () => {
        ${useCases}
        const state = new ${MODULE_NAME_CLASS}State( );
        const controller = new ${MODULE_NAME_CLASS}Controller(state, ${paramsForPresenter});
    
        return { controller, state };
    }

}
`;
    await fs.writeFile(PATH + MODULE_NAME + "/factory/" + MODULE_NAME_CLASS + "Factory.ts", factory, () => { });
}

async function create() {
    await createFolders();
    await createUiFiles();
    await createPresenterFiles();
    await createUseCasesFiles();
    await createFactoryFiles();
}

create();
