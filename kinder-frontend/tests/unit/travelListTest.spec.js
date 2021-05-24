import { mount } from '@vue/test-utils'
import TravelList from '../../src/components/TravelList.vue'

describe('TravelList Test', () => {
    test('load travel list vue should call GetTravelData method', () => {
        var wrapper = mount(TravelList)
        wrapper.vm.loadTravelDatas = jest.fn()
        expect(() => wrapper.vm.loadTravelDatas()).toBeCalledTimes(1);

        /* try
        const loadTravelDatas = jest.fn()
        const wrapper = shallowMount(TravelList,{
          setup:{loadTravelDatas}
        });
        expect(loadTravelDatas).toHaveBeenCalled();
        */
      });
})