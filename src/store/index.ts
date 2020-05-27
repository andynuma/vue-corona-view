import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import { CoronaState } from './modules/corona';

export type Rootstate = {
  corona: CoronaState;
};

export default new Vuex.Store<Rootstate>({});
