import React, { useContext } from 'react';
import AuthProvider from '../providers/AuthProvider';

const PrivateRoute = () => {
    const { user } = useContext(AuthProvider);

    return (
        <div>

        </div>
    );
};

export default PrivateRoute;