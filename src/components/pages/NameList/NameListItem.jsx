import React from "react";
import moment from "moment";

function NameListItem(props) {
    return (
        <React.Fragment>
            <li class="list-group-item shadow-sm">
                <div class="row align-items-center">
                    <div class="col-2">
                        <img src={props.avatar} alt={props.name} class="border border-dark rounded-circle" />
                    </div>
                    <div class="col-10">
                        <h4>{props.name}</h4>
                        <p>{props.city} | {props.Email}</p>
                        <small>{moment(props.birthday).format('DD-MM-YYYY')}</small>
                    </div>
                </div>
            </li>
        </React.Fragment>
    );
}

export default NameListItem;