import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function ProtectedRoute({ component: Component, allowedRoles, ...rest }) {
    return (
        <Route
            {...rest}
            render={(props) => {
                const accessToken = localStorage.getItem('accessToken');
                const userRole = localStorage.getItem('role');

                if (!accessToken) {
                    // Chuyển hướng đến trang đăng nhập nếu chưa đăng nhập
                    return <Redirect to="/auth/login" />;
                }

                if (allowedRoles && !allowedRoles.includes(userRole)) {
                    // Chuyển hướng về dashboard nếu role không đúng
                    return <Redirect to={`/${userRole.toLowerCase()}`} />;
                }

                // Hiển thị trang nếu người dùng đã đăng nhập và có đúng quyền
                return <Component {...props} />;
            }}
        />
    );
}

export default ProtectedRoute;
