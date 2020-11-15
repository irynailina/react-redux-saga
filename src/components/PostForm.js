import { Component } from "react";
import React from "react";
import { connect } from "react-redux";
import { createPost, showAlert } from "../redux/action";
import Alert from "./Alert";

class PostForm extends Component {
  state = {
    title: "",
  };

  submitHandle = (e) => {
    e.preventDefault();
    console.log(this.state.title);
    const { title } = this.state;
    if (!title.trim()) {
      return this.props.showAlert("Введите текст поста");
    }
    const newPost = {
      title,
      id: Date.now().toString(),
    };
    console.log(newPost);
    this.props.createPost(newPost);
    this.setState(() => ({
      title: "",
    }));
  };

  changeInputHandler = (e) => {
    this.setState((prev) => ({
      ...prev,
      ...{
        [e.target.name]: e.target.value,
      },
    }));
  };

  render() {
    return (
      <form onSubmit={this.submitHandle}>
        {this.props.alert && <Alert text={this.props.alert} />}
        <div className="form-group">
          <label htmlFor="title">Заголовок поста</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={this.state.title}
            onChange={this.changeInputHandler}
            name="title"
          />
        </div>
        <button type="submit" className="btn btn-success">
          Создать
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  createPost,
  showAlert,
};

const mapStateToProps = (state) => ({
  alert: state.app.alert,
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
