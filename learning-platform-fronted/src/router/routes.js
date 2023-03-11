import VueRouter from 'vue-router'
import LayOut from "@/components/layout/LayOut";
import ListCard from "@/components/case/ListCard";
import personCenter from "@/components/person/PersonCenter"
import editPerson from '@/components/search/EditPerson'
import LoginRegister from "@/components/person/LoginRegister";
import PersonInfo from "@/components/person/update/PersonInfo";
import AccountSetting from "@/components/person/update/AccountSetting";
import ListNews from "@/components/case/ListNews";
import webIndex from "@/components/WebIndex";
import PracticeIndex from "@/components/practice/index/PracticeIndex";
import PersonPractice from "@/components/practice/index/PersonPractice";
import PK from "@/components/practice/PK/PK";
import WriteArticle from "@/components/postCenter/create/WriteArticle";
import ResultSuccess from "@/components/result/ResultSuccess";
import PostSpecific from "@/components/post/PostSpecific";
import PKExercise from "@/components/practice/PK/PKExercise";
import DoQuestions from "@/components/practice/individual/DoQuestions";
import PostNews from "@/components/post/PostNews";
import PersonPost from "@/components/person/menu/PersonPost";
import PersonThumb from "@/components/person/menu/PersonThumb";
import PersonCollect from "@/components/person/menu/PersonCollect";
import ContentManager from "@/components/postCenter/manager/ContentManager";
import MailIndex from "@/components/mail/MailIndex";
import CommentIndex from "@/components/mail/comment/CommentIndex";
import ThumbAndCollectIndex from "@/components/mail/thumbAndCollect/ThumbAndCollectIndex";
import SystemIndex from "@/components/mail/system/SystemIndex";
import RecordIndex from "@/components/practice/record/RecordIndex";
import PKRecordIndex from "@/components/practice/record/PKRecordIndex";
import UserSys from "@/components/system/UserSys";
import PostSys from "@/components/system/PostSys";
import QuestionSys from "@/components/system/QuestionSys";
import MessSend from "@/components/system/message/MessSend";
import MessAccept from "@/components/system/message/MessAccept";

const routes = [

    {
        component: LayOut,
        path: '/index',
        children:
            [
                {
                    component: MailIndex,
                    path: '/mail',
                    children: [
                        {
                            component: CommentIndex,
                            path: ''
                        },
                        {
                            component: ThumbAndCollectIndex,
                            path: 'thumbAndCollect'
                        },
                        {
                            component: SystemIndex,
                            path: 'system'
                        }
                    ]
                },
                {
                    component: ListCard,
                    path: ''
                },
                {
                    component: PostSpecific,
                    path: '/post'
                },
                {
                    component: PostNews,
                    path: "/postNews"
                },
                {
                    component: personCenter,
                    path: '/personCenter',
                    children: [
                        {
                            component: PersonPost,
                            path: ""
                        },
                        {
                            component: PersonThumb,
                            path: 'personThumb'
                        }, {
                            component: PersonCollect,
                            path: 'personCollect'
                        }
                    ]
                },
                {
                    component: ListNews,
                    path: '/news'
                },
                {
                    component: ContentManager,
                    path: '/content'
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
                    component: UserSys,
                    path: '/sysUser'
                },
                {
                    component: PostSys,
                    path: '/sysPost'
                },
                {
                    component: QuestionSys,
                    path: '/sysQues'
                },
                {
                    component: MessSend,
                    path: "/mesaage/send"
                },
                {
                component: MessAccept,
                path: "/message/accept"
            },
            ]

    },
    {
        component: webIndex,
        path: "/"
    },

    {
        component: RecordIndex,
        path: '/record'
    },
    {
        component: PKRecordIndex,
        path: '/pkRecord'
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
        path: '/questions',
    },
    {
        component: PKExercise,
        path: '/pkExercise'
    },


]

const router = new VueRouter({
    routes: routes
})

export default router