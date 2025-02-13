/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { Dictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'
import { ActionExecutionMode, SimulatedActions } from '@watcher/_types/Action'
import { ScheduleTriggerEvent } from '@watcher/_types/Schedule'
import { Watch } from '@watcher/_types/Watch'
import { RequestBase } from '@_types/Base'
import { Id } from '@_types/common'

/**
 * @rest_spec_name watcher.execute_watch
 * @since 0.0.0
 * @stability stable
 */
export interface Request extends RequestBase {
  path_parts: {
    id?: Id
  }
  query_parameters: {
    debug?: boolean
  }
  body: {
    action_modes?: Dictionary<string, ActionExecutionMode>
    alternative_input?: Dictionary<string, UserDefinedValue>
    ignore_condition?: boolean
    record_execution?: boolean
    simulated_actions?: SimulatedActions
    trigger_data?: ScheduleTriggerEvent
    watch?: Watch
  }
}
