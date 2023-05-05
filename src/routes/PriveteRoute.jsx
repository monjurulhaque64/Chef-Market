import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PriveteRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();


    if (loading) {
        return <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-gray-900"></div>
        </div>;
    }
    
    if(user){
        return children;
    }
    return <Navigate state={{from: location}} to={'/singin'} replace></Navigate>;
};

export default PriveteRoute;