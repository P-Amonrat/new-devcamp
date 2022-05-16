import 'antd/dist/antd.css';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const AvatarComponents = () => {
    return (
        <div>
            <Avatar size={64} icon={<UserOutlined />} />
        </div>

    )
}

export default AvatarComponents;