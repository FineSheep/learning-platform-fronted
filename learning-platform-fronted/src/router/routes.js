import VueRouter from 'vue-router'
import LayOut from "@/components/layout/LayOut";
import ListCard from "@/components/case/ListCard";
import personCenter from "@/components/person/PersonCenter"
import editPerson from '@/components/search/EditPerson'
import LoginRegister from "@/components/person/LoginRegister";
import PersonInfo from "@/components/person/PersonInfo";
import AccountSetting from "@/components/person/AccountSetting";
import ListNews from "@/components/case/ListNews";
import ListView from "@/components/ListView";
import PracticeIndex from "@/components/practice/index/PracticeIndex";
import PersonPractice from "@/components/practice/index/PersonPractice";
import PK from "@/components/practice/PK/PK";
import CreateIndex from "@/components/create/CreateIndex";
import WriteArticle from "@/components/create/WriteArticle";
import ResultSuccess from "@/components/result/ResultSuccess";
import PostSpecific from "@/components/post/PostSpecific";
import QuestionIndex from "@/components/practice/individual/QuestionIndex";
import PKExercise from "@/components/practice/PK/PKExercise";
import DoQuestions from "@/components/practice/individual/DoQuestions";

const routes = [

    {
        component: LayOut,
        path: '/',
        children:
            [
                {
                    component: ListCard,
                    path: ''
                },
                {
                    component: PostSpecific,
                    path: 'post'
                },
                {
                    component: personCenter,
                    path: 'personCenter'
                },
                {
                    component: ListNews,
                    path: '/news'
                },
                {
                    component: ListView,
                    path: "/test"
                },
                {
                    component: editPerson,
                    path: '/editPerson',
                    children:
                        [
                            {
                                component: PersonInfo,
                                path: ''
                            },
                            {
                                component: AccountSetting,
                                path: 'accountSetting'
                            }]
                },
                {
                    component: PracticeIndex,
                    path: '/practiceIndex',
                    children: [
                        {
                            component: PersonPractice,
                            path: ''
                        },
                        {
                            component: PK,
                            path: 'pk'
                        },
                    ]
                },
                {
                    component: CreateIndex,
                    path: 'create'
                },
            ]

    },
    {
        component: LoginRegister,
        path: '/LoginRegister'
    },
    {
        component: WriteArticle,
        path: '/writeArticle'
    },
    {
        component: ResultSuccess,
        path: '/successful'
    },

    {
        component: DoQuestions,
        path: '/questions/:userId/:difficulty/:source/:sum',
    },
    {
        component: PKExercise,
        path: '/pkExercise'
    }


]

const router = new VueRouter({
    routes: routes
})

export default router