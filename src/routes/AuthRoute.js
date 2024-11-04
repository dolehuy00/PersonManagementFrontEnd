import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function AuthRoute({ component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render={(props) => {
                const accessToken = localStorage.getItem('accessToken');
                const userRole = localStorage.getItem('role');

                if (accessToken && userRole) {
                    // Nếu đã đăng nhập, chuyển hướng về dashboard của role
                    return <Redirect to={`/${userRole.toLowerCase()}`} />;
                }

                // Nếu chưa đăng nhập, hiển thị trang /auth (đăng nhập)
                return <Component {...props} />;
            }}
        />
    );
}

export default AuthRoute;
