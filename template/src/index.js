import { useIntl } from '@kne/react-intl';
import withLocale from './withLocale';
import style from './style.module.scss';

const <%=templateLibs.camelCase(name)%> = withLocale(()=>{
    const { formatMessage } = useIntl();
    return <span className={style['tips']}>我是一个初始化组件</span>
});

export default <%=templateLibs.camelCase(name)%>;
