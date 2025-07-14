import React from 'react';
import zhCn from './locale/zh-CN';
import enUS from './locale/en-US';
import { createWithIntlProvider, useIntl } from '@kne/react-intl';
import style from './style.module.scss';

const <%=templateLibs.camelCase(name)%> = createWithIntlProvider({
    defaultLocale: 'zh-CN',
    messages: {
        'zh-CN': zhCn,
        'en-US': enUS
    },
    namespace: '<%=name%>'
})(()=>{
    const { formatMessage } = useIntl();
    return <span className={style['tips']}>我是一个初始化组件</span>
});

export default <%=templateLibs.camelCase(name)%>;
