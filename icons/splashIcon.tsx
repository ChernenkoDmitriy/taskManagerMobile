import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";

export const SplashIcon: FC<{ width?: number, height?: number, color?: string }> = ({ width, height, color }) => {
    return (
        <Svg width={width || 318} height={height || 92} viewBox="0 0 318 92" fill="none" >
            <Path
                d="M17.92 44.298v7.951c0 .568.19 1.136.758 1.325l3.786 1.704v1.704c-2.65-.19-4.922-.19-7.194-.19H8.644l-.189-1.703 3.218-1.514c.379-.19.758-.568.758-1.326V11.36 7.572 4.543c0-.757-.19-1.135-.568-1.325L8.644 1.704V0c2.272.19 4.544.19 6.626.19h6.437c3.975 0 8.14 0 12.684-.19l.189.379-1.515 12.494-1.136.19-1.703-9.277H17.92v23.096h8.897c.568 0 .757-.379.947-1.136l1.136-5.49h1.325v16.66l-1.325.189-1.136-5.49c-.19-.758-.379-1.136-.758-1.136H17.92v13.82zM47.835 17.803v35.78h13.062l3.408-9.276 1.135-.19-.567 12.495v.189c-4.544 0-8.898-.19-12.873-.19h-6.626c-2.083 0-4.354 0-6.626.19l-.19-1.515 3.219-1.325c.379-.189.757-.568.757-1.136v-3.029-31.803-3.219-2.65c0-.568-.19-.947-.568-1.136L38.56 9.663V8.148c2.271 0 4.543.19 6.625.19 2.083 0 4.355 0 6.626-.19L52 9.663l-3.408 1.325c-.379.19-.568.568-.757 1.136v5.679z"
                fill="#fff"
            />
            <Path
                d="M102.158 30.853c0 7.762-1.704 14.009-5.3 18.742-3.598 4.732-8.33 7.193-14.767 7.193-6.058 0-10.601-2.271-13.82-6.625-3.218-4.355-4.921-10.223-4.921-17.795 0-7.762 1.703-14.01 5.3-18.553C72.247 9.272 76.98 7 83.416 7c6.058 0 10.602 2.082 14.01 6.437 3.028 4.354 4.732 10.033 4.732 17.416zm-32.94.379c0 7.383 1.136 13.062 3.597 16.848 2.272 3.976 5.869 5.869 10.412 5.869 4.543 0 7.762-1.704 9.844-5.3 2.083-3.598 3.218-9.088 3.218-16.66 0-7.194-1.135-12.684-3.407-16.47-2.272-3.786-5.869-5.68-10.602-5.68-4.543 0-7.95 1.704-10.033 5.301-1.893 3.597-3.029 8.898-3.029 16.092zM136.804 56.814l-9.466-37.484-9.844 37.294-2.65.19-10.602-43.352c-.378-1.136-.568-1.893-.946-2.65-.379-.569-.947-.947-1.515-1.326l-2.46-.946V7.025c1.703 0 3.785.19 6.247.19 2.082 0 4.543 0 7.383-.19l.189 1.515-2.461.946c-.379.19-.568.379-.757.568-.19.19-.19.568-.19.947 0 .378 0 1.136.19 1.893.189.757.378 1.704.757 3.029l7.194 30.29 10.033-39.188 2.461-.19 9.655 39.756 7.572-30.668c.379-1.325.568-2.461.757-3.219.19-.757.19-1.325.19-1.893 0-.568 0-.757-.19-.946-.189-.19-.378-.379-.757-.379l-2.461-.946V6.836c1.893 0 3.976.19 5.869.19h5.3s.947 5.3.379 3.407c-.379-1.704-2.65-.947-2.65-.947-.568.19-.947.568-1.325.947-.379.378-.568 1.136-.947 2.271l-11.548 43.352-3.407.758z"
                fill="#fff"
            />
            <Path
                d="M158.768 7.19h6.437c3.975 0 8.14 0 12.684-.19l.189.379-1.515 10.98-1.136.189-1.703-8.14h-12.305v19.498h8.708c.378 0 .757-.378.946-.946l.947-4.733h1.514v14.577l-1.514.19-.947-4.923c-.189-.568-.378-.946-.757-.946h-8.708v20.634h12.873l3.218-9.086 1.136-.38-.568 12.306-.189.19c-4.544 0-8.898-.19-12.873-.19h-6.437c-2.082 0-4.354 0-6.626.19l-.189-1.515 3.218-1.325c.379-.19.758-.568.758-1.136v-3.218-32.562-3.218-2.65c0-.568-.19-.947-.568-1.136l-3.408-1.325V7.568c2.461-.19 4.733-.379 6.815-.379zM188.305 45.803V52.618c0 .757.19 1.136.758 1.325l3.029 1.136v1.514c-2.083 0-4.165-.189-6.437-.189-2.082 0-4.354 0-6.626.19l-.189-1.515 3.218-1.325c.379-.19.757-.568.757-1.136V49.4 17.217v-3.218-2.65c0-.569-.189-.947-.568-1.136l-3.407-1.326V7.373c2.272 0 4.543.19 6.815.19h1.704c.757 0 1.514 0 2.461-.19.946 0 1.704 0 2.461-.19h1.514c4.165 0 7.194.947 9.276 3.03 2.083 2.082 3.029 4.922 3.029 8.897 0 3.597-.757 6.437-2.082 8.519-1.325 2.272-3.597 3.786-6.437 5.111 1.136 2.272 2.272 4.544 3.219 6.626.946 2.083 1.893 3.976 2.65 5.869.757 1.704 1.515 3.218 2.272 4.733.757 1.325 1.325 2.46 1.893 3.218.378.378.568.757.946 1.136.379.378.568.568.947.757l1.136.568c.378.19.757.19 1.136.378v1.515c-1.325.19-2.461.379-3.219.379h-1.893c-.568 0-1.136-.19-1.514-.19l-1.136-.568c-.379-.189-.757-.568-1.136-.946-.757-.758-1.514-1.704-2.272-3.219-.757-1.325-1.514-3.029-2.271-4.732-.758-1.704-1.515-3.597-2.461-5.49a80.278 80.278 0 00-2.651-5.869c-.189-.568-.568-.946-.757-1.325a2.596 2.596 0 00-.568-.757c-.189-.19-.568-.379-.757-.379-.379 0-.757-.19-1.136-.19h-1.893v11.549h.189zm0-14.766c1.136 0 2.083.189 3.029.189 3.029 0 5.301-.947 6.815-2.65 1.515-1.704 2.083-4.544 2.083-8.14 0-3.598-.757-6.248-2.083-7.762-1.325-1.704-3.596-2.461-6.436-2.461h-1.704c-.568 0-1.136.189-1.893.189v20.635h.189z"
                fill="#fff"
            />
            <Path
                d="M230.138 10.97c-1.893-.758-3.597-1.136-5.111-1.136-2.272 0-4.165.757-5.68 2.272-1.325 1.514-2.082 3.407-2.082 6.057 0 1.515.189 2.84.757 3.976.568 1.136 1.136 2.082 1.893 3.029.757.757 1.704 1.515 2.84 2.272 1.136.757 2.082 1.325 3.218 1.893 1.325.757 2.461 1.325 3.597 2.272a21.754 21.754 0 013.218 2.65c.947.946 1.704 2.272 2.272 3.786.568 1.515.757 3.029.757 5.111 0 4.544-1.325 7.951-4.165 10.412-2.839 2.461-6.436 3.597-10.79 3.597-2.84 0-6.058-.568-9.466-1.893l-.189-.19 1.325-11.736 1.136-.19 1.893 9.655c1.893.947 3.786 1.515 5.869 1.515 2.65 0 4.732-.758 6.247-2.272 1.514-1.515 2.272-3.597 2.272-6.437 0-1.514-.19-2.84-.758-3.786-.568-1.136-1.135-2.082-1.893-2.84-.757-.757-1.703-1.514-2.839-2.271-.947-.568-2.083-1.325-3.219-1.893-1.325-.758-2.461-1.515-3.596-2.272-1.136-.757-2.272-1.704-3.219-2.84-.946-1.135-1.703-2.46-2.271-3.975-.568-1.515-.947-3.408-.947-5.49 0-4.165 1.325-7.383 3.976-9.655 2.65-2.272 6.057-3.407 10.033-3.407 2.84 0 5.869.378 8.897 1.325l.19.19-1.515 10.79-1.136.189-1.514-8.708zM240.162 49.027c.946 0 1.703.379 2.271 1.136a4.65 4.65 0 01.947 2.84 4.65 4.65 0 01-.947 2.84c-.568.757-1.325 1.135-2.271 1.135-.947 0-1.704-.378-2.272-1.136a4.65 4.65 0 01-.947-2.84 4.65 4.65 0 01.947-2.839c.568-.757 1.325-1.136 2.272-1.136zM244.9 7c2.272 0 4.544.19 6.626.19 2.083 0 4.354 0 6.626-.19l.189 1.514-3.407 1.326c-.379.189-.568.568-.757 1.136v24.799c0 6.626.757 11.17 2.461 13.82 1.703 2.46 4.164 3.786 7.951 3.786 3.596 0 6.247-1.325 7.951-3.976 1.703-2.65 2.461-7.004 2.461-13.251v-19.5-3.217-2.65c0-.569-.19-.947-.758-1.137l-3.218-1.136V7c2.272 0 4.165.19 5.869.19 1.514 0 3.407 0 5.679-.19l.189 1.514-3.407 1.326c-.379.189-.568.568-.568 1.136V34.639c0 7.572-1.136 13.252-3.597 16.849-2.461 3.597-6.058 5.49-11.359 5.49-5.111 0-8.708-1.704-11.169-4.922-2.461-3.219-3.597-8.33-3.597-15.145V16.844v-3.218-2.65c0-.568-.189-.947-.568-1.136l-3.407-1.326L244.9 7zM297.348 7l11.927 42.784c.379 1.514.946 2.65 1.136 3.218.378.568.946.947 1.514 1.325l2.461.947v1.514c-2.271 0-4.543-.189-6.436-.189-2.083 0-4.354 0-7.194.19l-.189-1.515 2.461-.947c.378-.189.568-.378.757-.568.189-.189.189-.568.189-.946 0-.379 0-1.136-.189-1.893-.189-.758-.379-1.704-.757-3.03l-2.461-9.275h-12.873l-2.84 9.276c-.379 1.325-.757 2.272-.947 3.029-.189.757-.378 1.325-.378 1.893 0 .378 0 .757.189.946.189.19.379.379.757.568l2.461.947v1.514c-2.461 0-4.543-.189-6.247-.189-1.704 0-3.407 0-5.3.19l-.19-1.515 2.651-1.136c.757-.19 1.135-.757 1.514-1.325s.757-1.515 1.136-2.65l14.009-42.595L297.348 7zm-8.518 28.396h10.979l-5.3-19.31-5.679 19.31zM164.258 82.353c0 3.218-2.461 5.679-5.68 5.679-3.218 0-5.679-2.65-5.679-5.68 0-3.028 2.461-5.678 5.679-5.678 3.219 0 5.68 2.46 5.68 5.679zm-15.713-4.733c-10.791.379-74.777 2.272-97.494 1.325-12.684-.568-36.348-4.165-49.22-7.004-2.083-.379-2.462 1.893-.758 2.46 8.14 2.462 33.318 8.709 49.978 10.413 22.717 2.272 85.946 2.082 98.441 2.082 1.135 0 1.893-1.136 1.703-2.272l-.946-5.3c-.19-1.136-.947-1.893-1.704-1.704zm20.635 8.519c10.79-.379 74.777-2.272 97.494-1.325 12.684.568 36.347 4.165 49.221 7.004 2.082.379 2.461-1.893.757-2.46-8.141-2.462-33.319-8.709-49.978-10.413-22.717-2.271-85.946-2.082-98.441-2.082-1.136 0-1.893 1.136-1.704 2.272l.947 5.3c0 1.136.947 1.704 1.704 1.704z"
                fill="#fff"
            />
        </Svg>
    )
};