import React from "react";
import { StyledWrapper } from "../../styles/StyledWrapper";
import RightColumn from "./rightColumn/RightColumn";
import { StyledSection } from "./StyledDetail";

function Detail(props) {
	console.log(props);
	return (
		<StyledSection>
			<StyledWrapper>
				<div className="detail">
					<div className="detail__row--left"></div>
					<RightColumn {...props} />
				</div>
			</StyledWrapper>
		</StyledSection>
	);
}

export default Detail;
