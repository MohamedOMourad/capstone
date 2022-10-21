import {
    CalendarIcon,
    ChartBarIcon,
    FolderIcon,
    HomeIcon,
    InboxIcon,
    UsersIcon,
} from '@heroicons/react/24/outline'



export function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

export const navigation = [
    { value: 'Vehicles', href: '#', icon: HomeIcon, current: true },
    { value: 'Properties', href: '#', icon: UsersIcon, current: false },
    { value: 'Mobile Phones', href: '#', icon: FolderIcon, current: false },
    { value: 'Electronics', href: '#', icon: CalendarIcon, current: false },
    { value: 'Fashion', href: '#', icon: InboxIcon, current: false },
    { value: 'Books', href: '#', icon: ChartBarIcon, current: false },
]

export const location = [
    { value: 'Alexandria, Egypt', label: 'Alexandria, Egypt' },
    { value: 'Aswan, Egypt', label: 'Aswan, Egypt' },
    { value: 'Aswan, Egypt', label: 'Aswan, Egypt' },
    { value: 'Beheira, Egypt', label: 'Beheira, Egypt' },
    { value: 'Beni Suef, Egypt', label: 'Beni Suef, Egypt' },
    { value: 'Cairo, Egypt', label: 'Cairo, Egypt' },
    { value: 'Dakahlia, Egypt', label: 'Dakahlia, Egypt' },
    { value: 'Damietta, Egypt', label: 'Damietta, Egypt' },
    { value: 'Fayoum, Egypt', label: 'Fayoum, Egypt' },
    { value: 'Gharbia, Egypt', label: 'Gharbia, Egypt' },
    { value: 'Giza, Egypt', label: 'Giza, Egypt' },
    { value: 'Ismailia, Egypt', label: 'Ismailia, Egypt' },
    { value: 'Kafr al - Sheikh, Egypt', label: 'Kafr al - Sheikh, Egypt' },
    { value: 'Luxor, Egypt', label: 'Luxor, Egypt' },
    { value: 'Matruh, Egypt', label: 'Matruh, Egypt' },
    { value: 'Minya, Egypt', label: 'Minya, Egypt' },
    { value: 'Monufia, Egypt', label: 'Monufia, Egypt' },
    { value: 'New Valley, Egypt', label: 'New Valley, Egypt' },
    { value: 'Port Said,Egypt', label: 'Port Said,Egypt' },
    { value: 'Qalyubia, Egypt', label: 'Qalyubia, Egypt' },
    { value: 'Qena, Egypt', label: 'Qena, Egypt' },
    { value: 'Red Sea, Egypt', label: 'Red Sea, Egypt' },
    { value: 'Sharqia, Egypt', label: 'Sharqia, Egypt' },
    { value: 'Sohag, Egypt', label: 'Sohag, Egypt ' },
    { value: 'South Sinai, Egypt', label: 'South Sinai, Egypt' },
    { value: 'Suez, Egypt', label: 'Suez, Egypt' },
]