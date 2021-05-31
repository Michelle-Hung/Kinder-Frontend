import { mount, shallowMount } from '@vue/test-utils'
import TravelList from '../../src/components/TravelList.vue'
import getTravelDatas from '../../src/composables/GetTravelDatas'

jest.mock('../../src/composables/GetTravelDatas')

describe('TravelList Test', () => {
    test('load travel list vue should call GetTravelData method', () => {
        //TODO : fix can't mount DOM when "const {travelDatas} = getTravelDatas "
        shallowMount(TravelList)
        expect(getTravelDatas).toHaveBeenCalled();
        
      }),
      test('click more will call GoToTravelDetailPage', () => {
        //TODO: fix can't mount element ui plus DOM, it only has <el-row></el-row>
        const wrapper = shallowMount(TravelList);
        wrapper.vm.GoToTravelDetailPage = jest.fn()
        console.log(wrapper.html())
        wrapper.find('.el-button').trigger('click')
        //wrapper.findComponent({ ref: 'MoreTravelDataButton' }).trigger('click')
        expect(wrapper.vm.GoToTravelDetailPage).toHaveBeenCalled()
      })
})