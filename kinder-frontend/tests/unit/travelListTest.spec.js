import { mount, shallowMount } from '@vue/test-utils'
import TravelList from '../../src/components/TravelList.vue'

describe('TravelList Test', () => {
    test('load travel list vue should call GetTravelData method', () => {
        const loadTravelDatas = jest.fn()
        const wrapper = shallowMount(TravelList,{
          setup:{loadTravelDatas}
        });
        expect(loadTravelDatas).toHaveBeenCalled();
        
      });
})