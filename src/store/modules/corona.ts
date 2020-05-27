import {
  Mutation,
  Module,
  VuexModule,
  getModule,
  Action,
} from 'vuex-module-decorators';
import store from '../index';
import axios from 'axios';

export type CoronaState = {
  data: CoronaData;
};

@Module({ dynamic: true, store: store, name: 'corona', namespaced: true })
class Corona extends VuexModule implements CoronaState {
  data = ([] as unknown) as CoronaData;

  @Mutation
  private SET_DATA(res: CoronaData) {
    this.data = res;
  }

  @Action
  public async setData() {
    const response = await axios.get<CoronaData>(
      'https://services1.arcgis.com/0MSEUqKaxRlEPj5g/arcgis/rest/services/ncov_cases/FeatureServer/2/query?f=json&where=Confirmed%20%3E%200&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Confirmed%20desc&resultOffset=0&resultRecordCount=200&cacheHint=true'
    );
    this.SET_DATA(response.data);
  }

  get features() {
    return this.data.features;
  }
}

export const coronaModule = getModule(Corona);
