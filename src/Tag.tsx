// REACT
import React from "react";

// STYLE
import styled from "styled-components";

// HELPER
import PropTypes from "prop-types";

interface IProps {
    type: string;
}

const ServiceTypeTag: React.FC<IProps> = ({ type = "" }) => {
    return <TagButton type={type}>{type}</TagButton>;
};

const TagButton = styled.button<{ type: any }>`
    max-width: 50px;
    opacity: 0.5;
    font-size: 10px;
    color: ${(props) => (props.type === "야간진료" ? "#e33c47" : "blue")};
    font-weight: 800;
    padding: 1px;
    border-radius: 2px;
    border: 2px solid ${(props) => (props.type === "야간진료" ? "#e33c47" : "blue")};
    background-color: white;
`;

ServiceTypeTag.propTypes = {
    type: PropTypes.string.isRequired,
};

export default ServiceTypeTag;
