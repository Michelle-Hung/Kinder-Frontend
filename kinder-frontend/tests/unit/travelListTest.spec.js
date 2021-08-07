import { mount, shallowMount } from '@vue/test-utils'
import TravelList from '../../src/components/TravelList.vue'
import { getTravelDatas } from '../../src/composables/GetTravelDatas'
import ElementPlus from 'element-plus'
import { useRouter } from 'vue-router'

jest.mock('../../src/composables/GetTravelDatas');
jest.mock('vue-router')

describe('TravelList Test', () => {
    test('load travel list vue should call GetTravelData method', () => {
      require('../../src/composables/GetTravelDatas').getTravelDatas.mockReturnValue([])
      require('vue-router').useRouter.mockReturnValue({})
      const wrapper = shallowMount(TravelList, {
        global: {
            plugins: [ElementPlus]
        }
      });
      expect(getTravelDatas).toHaveBeenCalled();

    });
    test('click more will call GoToTravelDetailPage', () => {
      require('../../src/composables/GetTravelDatas').getTravelDatas.mockReturnValue([])
      require('vue-router').useRouter.mockReturnValue({})
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