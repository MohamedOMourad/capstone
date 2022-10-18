import {
    Bars3Icon,
    CalendarIcon,
    ChartBarIcon,
    FolderIcon,
    HomeIcon,
    InboxIcon,
    UsersIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'



export function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

export const navigation = [
    { name: 'Vehicles', href: '#', icon: HomeIcon, current: true },
    { name: 'Properties', href: '#', icon: UsersIcon, current: false },
    { name: 'Mobile Phones', href: '#', icon: FolderIcon, current: false },
    { name: 'Electronics', href: '#', icon: CalendarIcon, current: false },
    { name: 'Fashion', href: '#', icon: InboxIcon, current: false },
    { name: 'Books', href: '#', icon: ChartBarIcon, current: false },
]
























export const location = [
    { id: 1, name: 'Alexandria, Egypt' },
    { id: 2, name: 'Aswan, Egypt' },
    { id: 3, name: 'Asyut, Egypt' },
    { id: 4, name: 'Beheira, Egypt' },
    { id: 5, name: 'Beni Suef, Egypt' },
    { id: 6, name: 'Cairo, Egypt' },
    { id: 4, name: 'Dakahlia, Egypt' },
    { id: 5, name: 'Damietta, Egypt' },
    { id: 6, name: 'Fayoum, Egypt' },
    { id: 7, name: 'Gharbia, Egypt' },
    { id: 8, name: 'Giza, Egypt' },
    { id: 9, name: 'Ismailia, Egypt' },
    { id: 10, name: 'Kafr al - Sheikh, Egypt' },
    { id: 11, name: 'Luxor, Egypt' },
    { id: 12, name: 'Matruh, Egypt' },
    { id: 13, name: 'Minya, Egypt' },
    { id: 14, name: 'Monufia, Egypt' },
    { id: 15, name: 'New Valley, Egypt' },
    { id: 16, name: 'Port Said, Egypt' },
    { id: 17, name: 'Qalyubia, Egypt' },
    { id: 18, name: 'Qena, Egypt' },
    { id: 19, name: 'Red Sea, Egypt' },
    { id: 20, name: 'Sharqia, Egypt' },
    { id: 21, name: 'Sohag, Egypt ' },
    { id: 22, name: 'South Sinai, Egypt' },
    { id: 23, name: 'Suez, Egypt' },
]