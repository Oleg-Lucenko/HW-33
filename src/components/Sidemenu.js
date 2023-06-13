import { Menu } from 'antd';
import { DashboardOutlined, UserOutlined, ShoppingCartOutlined, SettingOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const menuItems = [
    {
        label: 'Dashboard',
        key: '/HW-33',
        icon: <DashboardOutlined />
    },
    {
        label: 'Users',
        key: '/HW-33/users',
        icon: <UserOutlined />
    },
    {
        label: 'Products',
        key: '/HW-33/products',
        icon: <ShoppingCartOutlined />
    },
    {
        label: 'System Configuration',
        key: '/HW-33/system',
        icon: <SettingOutlined />
    }
]

function Sidemenu() {
    const navigate = useNavigate();
    return (
        <Menu
            mode="inline"
            items={menuItems}
            onClick={(item) => {
                navigate(item.key);
            }}
        />
    );
}

export default Sidemenu;