/**
 * Copyright (c) 2024, WSO2 LLC. (https://www.wso2.com).
 *
 * WSO2 LLC. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { ThemeProvider } from "@oxygen-ui/react/theme";
import * as ReactDOM from "react-dom/client";
import { App } from "./app";
import Theme from "../wso2_modules/console-theme/theme";

import.meta.glob(
    "/wso2_modules/react-components/node_modules/@wso2is/theme/dist/lib/themes/wso2is/theme.*.min.css",
    { eager: true }
);
import.meta.glob(
    "/wso2_modules/react-components/dist/index.cjs.css",
    { eager: true }
);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <ThemeProvider theme={ Theme } defaultMode="light">
        <App />
    </ThemeProvider>
);