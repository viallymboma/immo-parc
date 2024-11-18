import {
  CalendarSvgIcon,
  Dashboard2SvgIcon,
  DashboardSvgIcon,
  FormsSvgIcon,
  ProductsSvgIcon,
  ProfileSvgIcon,
  SettingSvgIcon,
  TablesSvgIcon,
  WaletSvgIcon,
} from '@/components/svgs/SvgIcons';

export type BottomElemenetType = {
    id?: number | string, 
    icon: any, 
    tooltip: string, 
    route: string,
}

export const bottomNavElement: BottomElemenetType [] = [
    {
        id: 1,
        icon: (
            <Dashboard2SvgIcon />
        ), 
        tooltip: "Accueil", 
        route: "/backoffice"
    }, 
    {
        id: 2,
        icon: (
            <ProductsSvgIcon />
        ), 
        tooltip: "Tâches", 
        route: "/backoffice/task-list"
    }, 
    {
        id: 3,
        icon: (
            <WaletSvgIcon />
        ), 
        tooltip: "Portefeuille", 
        route: "/dashboard/wallet"
    }, 
    {
        id: 4,
        icon: (
            <SettingSvgIcon />
        ), 
        tooltip: "Mon compte", 
        route: "/dashboard/my-account"
    }
]

export const menuGroups = [
    {
        name: "MENU PRINCIPAL",
        menuItems: [
            {
                icon: (
                    <DashboardSvgIcon />
                ),
                label: "Tableau de Bord",
                route: "/backoffice",
            },
            {
                icon: (
                    <CalendarSvgIcon />
                ),
                label: "Commissions",
                // route: "/dashboard/commissions",
                route: "#"
            },
            {
                icon: (
                    <FormsSvgIcon />
                ),
                label: "Team",
                route: "#",
                children: [
                    { label: "Mon équipe", route: "/dashboard/teams/view" },
                    { label: "Tree View", route: "/dashboard/teams/tree-view" },
                    { label: "Folder View", route: "dashboard/teams/folder-view" },
                ],
            },
            {
                icon: (
                    <TablesSvgIcon />
                ),
                label: "Transactions",
                route: "#",
                children: [
                    // { label: "Tables", route: "/tables" },
                    { label: "Commissions", route: "dashboard/transactions/commissions" },
                    { label: "Withdrawals", route: "/dashboard/transactions/withdrawals" },
                    { label: "Investissements", route: "/dashboard/transactions/investments" },
                ],
            },
        ],
    },
    {
        name: "REGLAGES",
        menuItems: [
            {
                icon: (
                    <ProfileSvgIcon />
                ),
                label: "Profile",
                route: "/dashboard/profile",
            }, 
            {
                icon: (
                    <CalendarSvgIcon />
                ),
                label: "Utilisateurs",
                route: "/dashboard/utilisateurs",
            },
        ],
    },
];

const taskStatus = [
    "pending", 
    "ongoing", 
    "completed", 
    "failed", 
    "expired"
]

const getRandomTaskStatus = () => {
    const randomIndex = Math.floor(Math.random() * taskStatus.length);
    return taskStatus[randomIndex];
};

export type TaskDataType = {
    id: number | string, 
    taskTitle?: string, 
    taskMission?: string,
    taskRemuneration: number, 
    taskDescription: string, 
    taskStatus: string, 
    taskCategory?: string,
    taskLink: string, 
}

export const tasks: TaskDataType [] = [
    {
        id: 1, 
        taskTitle: "View Like & Comment", 
        taskMission: "View Like & Comment",
        taskRemuneration: 800, 
        taskDescription: "Inscrivez-vous et connectez-vous avec votre compte YouTube, puis prenez des captures d'écran et téléchargez des images si nécessaire.", 
        taskCategory: "", 
        taskStatus: getRandomTaskStatus (), 
        taskLink: "https://www.youtube.com/watch?v=_M3bAO6JG_c", 
    }, 
    {
        id: 2, 
        taskTitle: "View Like & Comment", 
        taskMission: "View Like & Comment",
        taskRemuneration: 800, 
        taskDescription: "Inscrivez-vous et connectez-vous avec votre compte YouTube, puis prenez des captures d'écran et téléchargez des images si nécessaire.", 
        taskCategory: "", 
        taskStatus: getRandomTaskStatus (), 
        taskLink: "https://www.youtube.com/watch?v=_M3bAO6JG_c", 
    }, 
    {
        id: 3, 
        taskTitle: "View Like & Comment", 
        taskMission: "View Like & Comment",
        taskRemuneration: 800, 
        taskDescription: "Inscrivez-vous et connectez-vous avec votre compte YouTube, puis prenez des captures d'écran et téléchargez des images si nécessaire.", 
        taskCategory: "", 
        taskStatus: getRandomTaskStatus (), 
        taskLink: "https://www.youtube.com/watch?v=_M3bAO6JG_c", 
    }, 
    {
        id: 4, 
        taskTitle: "View Like & Comment", 
        taskMission: "View Like & Comment",
        taskRemuneration: 800, 
        taskDescription: "Inscrivez-vous et connectez-vous avec votre compte YouTube, puis prenez des captures d'écran et téléchargez des images si nécessaire.", 
        taskCategory: "", 
        taskStatus: getRandomTaskStatus (), 
        taskLink: "https://www.youtube.com/watch?v=_M3bAO6JG_c", 
    }, 
]


// Description de la tâche：
// Description de la tâche：
// Description de la tâche：
// Description de la tâche：