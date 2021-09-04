import { mount, shallowMount } from '@vue/test-utils'
import TravelList from '../../src/components/TravelList.vue'
import getTravelList from '../../src/composables/GetTravelList'
import ElementPlus from 'element-plus'
import { useRouter } from 'vue-router'

jest.mock('../../src/composables/GetTravelList');
jest.mock('vue-router');

describe('TravelList Test', () => {
  beforeAll(() => {
    getTravelList.mockReturnValue([]);
    useRouter.mockReturnValue({});
  });
  
  test('load travel list vue should call GetTravelData method', () => {
    const wrapper = shallowMount(TravelList, {
      global: {
          plugins: [ElementPlus]
      }
    });
    expect(getTravelList).toHaveBeenCalled();

  });
  test('click more will call GoToTravelDetailPage', () => {
    const wrapper = shallowMount(TravelList, {
      global: {
          plugins: [ElementPlus]
      }
    });
    wrapper.vm.GoToTravelDetailPage = jest.fn()
    wrapper.find('.el-button').trigger('click')
    //wrapper.findComponent({ ref: 'MoreTravelDataButton' }).trigger('click')
    expect(wrapper.vm.GoToTravelDetailPage).toHaveBeenCalled()
  });
})