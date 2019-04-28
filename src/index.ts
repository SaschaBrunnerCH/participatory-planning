/*
 * Copyright 2019 Esri
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
import "./config";

import App from "./ts/App";


const planningArea = [
  [945475.792799, 5971275.749358],
  [945906.774835, 5971123.898871],
  [945842.451670, 5971017.433125],
  [945922.642552, 5970978.702662],
  [945832.726537, 5970809.449232],
  [945668.762297, 5970773.619375],
  [945336.568233, 5970882.473960],
  [945386.218157, 5971098.306241],
  [945422.218882, 5971098.476745]
];

const webSceneId = "bbd897e023cb4b89803b46efc4ebb0b0";

/**
 * Initialize application
 */
export const app = new App({
  planningArea,
  webSceneId,
});
app.container = "app";
