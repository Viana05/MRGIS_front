import {
    createRouter,
    createWebHistory
} from 'vue-router'
import LoginVue from'@/views/Login.vue'
import LayoutVue from '@/views/Layout.vue'

// Introduction
import IntroductionVue from '@/views/Introduction/Introduction.vue'
// BasicStep
import BasicStepVue from '@/views/BasicStep/BasicStep.vue'
// Geology
import GeologyIntroVue from '@/views/Geology/GeologyIntro.vue'
import RockIdentiVue from '@/views/Geology/RockIdenti.vue'
import FeatureRecogVue from '@/views/Geology/FeatureRecog.vue'
import StructureFieldVue from '@/views/Geology/StructureField.vue'
import GeologySurveyVue from '@/views/Geology/GeologySurvey.vue'
// Geomorphology
import GeomorphologyIntroVue from '@/views/Geomorphology/GeomorphologyIntro.vue'
import ExternalForceVue from '@/views/Geomorphology/ExternalForce.vue'
import InternalForceVue from '@/views/Geomorphology/InternalForce.vue'
import GeomorphologyObserVue from '@/views/Geomorphology/GeomorphologyObser.vue'
// PhysicalGeography
import PhysicalGeoIntroVue from '@/views/PhysicalGeography/PhysicalGeoIntro.vue'
import SoilGeographyVue from '@/views/PhysicalGeography/SoilGeography.vue'
import PlantGeographyVue from '@/views/PhysicalGeography/PlantGeography.vue'
// Roadmap
import RoadmapIntroVue from '@/views/Roadmap/RoadmapIntro.vue'
import RoadmapOneVue from '@/views/Roadmap/RoadmapOne.vue'
import RoadmapTwoVue from '@/views/Roadmap/RoadmapTwo.vue'
import RoadmapThreeVue from '@/views/Roadmap/RoadmapTwo.vue'
import RoadmapFourVue from '@/views/Roadmap/RoadmapFour.vue'
// Task
import TaskVue from '@/views/Task/Task.vue'
// 导入组件
const routes=[
    {path:'/login',component:LoginVue},
    {path:'/',component:LayoutVue,children:[
        // Introduction
        {path:'/introduction',component:IntroductionVue},
        // BasicStep
        {path:'/basicstep',component:BasicStepVue},
        // Geology
        {path:'/geology/intro',component:GeologyIntroVue},
        {path:'/geology/rockidenti',component:RockIdentiVue},
        {path:'/geology/featurerecog',component:FeatureRecogVue},
        {path:'/geology/structurefield',component:StructureFieldVue},
        {path:'/geology/survey',component:GeologySurveyVue},
        // Geomorphology
        {path:'/geomorphology/intro',component:GeomorphologyIntroVue},
        {path:'/geomorphology/externalforce',component:ExternalForceVue},
        {path:'/geomorphology/internalforce',component:InternalForceVue},
        {path:'/geomorphology/obser',component:GeomorphologyObserVue},
        // PhysicalGeography
        {path:'/physicalgeo/intro',component:PhysicalGeoIntroVue},
        {path:'/physicalgeo/soilgeography',component:SoilGeographyVue},
        {path:'/physicalgeo/plantgeography',component:PlantGeographyVue},
        // Roadmap
        {path:'/roadmap/intro',component:RoadmapIntroVue},
        {path:'/roadmap/one',component:RoadmapOneVue},
        {path:'/roadmap/two',component:RoadmapTwoVue},
        {path:'/roadmap/three',component:RoadmapThreeVue},
        {path:'/roadmap/four',component:RoadmapFourVue},
        // Task
        {path:'/task',component:TaskVue},
    ]}
]
// 创建路由器
const router=createRouter({
    history:createWebHistory(),
    routes:routes
})
// 导出路由
export default router