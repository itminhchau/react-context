import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { themeContext } from './ThemeContext';
import './Pragrap.css'

Pragrap.propTypes = {

};
// upsteam
function Pragrap(props) {
    const context = useContext(themeContext)
    const { theme } = context // thay doi
    return (
        <div>
            <span className={theme}>Văn cảnh, còn được gọi là ngữ cảnh, là một đoạn tương đối hoàn chỉnh của lời nói hoặc lời viết, một vùng ngôn từ bao quanh tác phẩm hoặc một bộ phận tác phẩm, trong đó nghĩa và ý nghĩa của mỗi từ, mỗi câu được biểu lộ chính xác nhất</span>
        </div>
    );
}

export default Pragrap;