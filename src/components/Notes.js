import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export const Notes = ({ notes, onRemove }) => (
  <TransitionGroup component="ul" className="list-group">
    {notes.map((n) => (
      <CSSTransition key={n.id} classNames={'note'} timeout={800}>
        <li className="list-group-item note">
          <div>
            <strong> {n.title} </strong>
            <small>{n.date}</small>
          </div>

          <button
            onClick={() => onRemove(n.id)}
            type="button"
            className="btn btn-outline-danger btn-sm"
          >
            {" "}
            &times;{" "}
          </button>
        </li>
      </CSSTransition>
    ))}
  </TransitionGroup>
);
