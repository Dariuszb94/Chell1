import React from 'react';
import PropTypes from 'prop-types';

const User = ({user}) => {
    return (
        <div>
         {console.log(user)}   
        </div>
    );
};

User.propTypes = {
    user=Object,
};

export default User;