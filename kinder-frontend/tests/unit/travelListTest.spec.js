import { mount, shallowMount } from '@vue/test-utils'
import TravelList from '../../src/components/TravelList.vue'
import { getTravelDatas } from '../../src/composables/GetTravelDatas'
import ElementPlus from 'element-plus'

jest.mock('../../src/composables/GetTravelDatas')

getTravelDatas.mockReturnValue([]);

const wrapper = shallowMount(TravelList, {
  global: {
      plugins: [ElementPlus]
  }
})

describe('TravelList Test', () => {
    test('load travel list vue should call GetTravelData method', () => {
        expect(getTravelDatas).toHaveBeenCalled();

      }),
      test('click more will call GoToTravelDetailPage', () => {
        wrapper.vm.GoToTravelDetailPage = jest.fn()
        console.log(wrapper.html())
        wrapper.find('.el-button').trigger('click')
        //wrapper.findComponent({ ref: 'MoreTravelDataButton' }).trigger('click')
        expect(wrapper.vm.GoToTravelDetailPage).toHaveBeenCalled()
      })
})