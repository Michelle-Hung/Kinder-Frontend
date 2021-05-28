import { mount, shallowMount } from '@vue/test-utils'
import TravelList from '../../src/components/TravelList.vue'
import getTravelDatas from '../../src/composables/GetTravelDatas'
jest.mock('../../src/composables/GetTravelDatas',() => ({
  load:  jest.fn()
}))

describe('TravelList Test', () => {
    test('load travel list vue should call GetTravelData method', () => {
      
        shallowMount(TravelList)
        expect(getTravelDatas.load()).toHaveBeenCalled();
        
      });
})