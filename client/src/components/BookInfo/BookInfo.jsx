import React, { Component } from 'react';

class BookInfo extends Component {

  onClick = e => {
    this.props.show = false;
  }

  render() {
    if (!this.props.show){
      return null;
    }
    return (
      <div className="modal is-active">
      {/* <div className="modal-background"></div> */}
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{this.props.title} </p>
          <button className="delete" aria-label="close" onClick={e => {this.onClose(e)}} ></button>
        </header>
        <section className="modal-card-body">
          <img className= "image" src="https://placekitten.com/300/450" alt="Placeholder bookcover" id="bookcover-modal" />
          <p className="title is-3">Book Title</p>
          <p className="subtitle is-5">Author</p>
          <p>Description of book, limit character count to something reasonable. No
            more than two lines. Just enough to be sure you're looking at the
            right book.</p> 
          <br/>
          <p>
            <strong>Rating:</strong> X/X
          </p>

        </section>
        <footer className="modal-card-foot">
          <button className="button is-success">Add to Library</button>
          <button className="button">Remove Button</button>
        </footer>
      </div>
    </div>
    );
  }
}

export default BookInfo;