import 'antd/dist/antd.css';
import { Button, notification } from 'antd';

const openNotification = () => {
    notification.open({
        message: 'Notification Title',
        description:
            'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        onClick: () => {
            console.log('Notification Clicked!');
        },
    });
};

const NotificationComponent = () => {
    return (
        <Button type="primary" onClick={openNotification}>
            Notification
        </Button>
    )
}


export default NotificationComponent;