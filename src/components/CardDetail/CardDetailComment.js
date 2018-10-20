import React, { Component } from "react";

import Styles from "./CardDetail.module.scss";

class CardDetailComment extends Component {
  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <div className={Styles.cardcomment}>
        <p>Comment</p>
        <textarea
          id="CardDetailComment_textarea"
          className={Styles.cardcomment__textarea}
          placeholder="Write a comment..."
        />

        <button className={Styles.cardcomment__savebtn}>Save</button>
      </div>
    );
  }
}

export default CardDetailComment;
