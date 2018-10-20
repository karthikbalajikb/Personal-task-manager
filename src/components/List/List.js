import React from "react";
import PropTypes from "prop-types";
import { DropTarget } from "react-dnd";

import ListTitle from "./ListTitle";
import Card from "../Card/Card";
import QuickMenuButton from "../QuickMenu/QuickMenuButton";
import AddButton from "../AddButton/AddButton";
import CardWrapper from "../Card/CardWrapper";

import { DragTypes } from "../../constants/DragTypes";

import Styles from "./List.module.scss";

const ListTarget = {
  canDrop() {
    return false;
  },
  drop(props, monitor, component) {
    const { id: listId } = props;
    const {
      listID: fromListID,
      id: cardId,
      title,
      description
    } = monitor.getItem();
    props.handleMoveCard(fromListID, listId, cardId, title, description);
  },
  hover(props, monitor, component) {}
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

class List extends React.Component {
  offset = el => {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  };

  handleListQuickEdit = (e, listId, listTitle) => {
    e.stopPropagation();
    let divOffset = this.offset(e.currentTarget.parentNode);
    const { top, left } = divOffset;
    return this.props.handleListQuickEdit(listId, listTitle, top, left);
  };

  render() {
    const { connectDropTarget } = this.props;

    return connectDropTarget(
      <article>
        <section className={Styles.list}>
          <header className={Styles.list__header}>
            <ListTitle listTitle={this.props.title} />
            <QuickMenuButton
              handleQuickEdit={e =>
                this.handleListQuickEdit(e, this.props.id, this.props.title)
              }
            />
          </header>
          {this.props.cards.length !== 0 ? (
            <div className={Styles.list__content}>
              {this.props.cards.map((d, i) => (
                <div key={d.id}>
                  <CardWrapper>
                    <Card
                      listID={this.props.id}
                      id={d.id}
                      title={d.title}
                      description={d.description}
                      key={d.id}
                      index={i}
                      handleToggleQuickEdit={(top, left) =>
                        this.props.handleToggleQuickEdit(
                          this.props.id,
                          d.id,
                          d.title,
                          top,
                          left
                        )
                      }
                      handleShowCardDetailModal={() =>
                        this.props.handleShowCardDetailModal(
                          this.props.id,
                          d.id,
                          d.title
                        )
                      }
                      handleMoveCard={(
                        fromListID,
                        listId,
                        cardId,
                        dropIndex,
                        title,
                        description
                      ) =>
                        this.props.handleMoveCard(
                          fromListID,
                          listId,
                          cardId,
                          dropIndex,
                          title,
                          description
                        )
                      }
                    />
                  </CardWrapper>
                </div>
              ))}
            </div>
          ) : (
            <div>
              <CardWrapper>
                <div
                  style={{ minHeight: 40 }}
                  listID={this.props.id}
                  handleMoveCard={(
                    fromListID,
                    listId,
                    cardId,
                    dropIndex,
                    title,
                    description
                  ) =>
                    this.props.handleMoveCard(
                      fromListID,
                      listId,
                      cardId,
                      dropIndex,
                      title,
                      description
                    )
                  }
                />
              </CardWrapper>
            </div>
          )}

          <AddButton
            name="Add another card"
            handleAddNewItem={name =>
              this.props.handleAddNewCard(this.props.id, name)
            }
          />
        </section>
      </article>
    );
  }
}

List.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string
    })
  ),
  handleAddNewCard: PropTypes.func,
  handleToggleQuickEdit: PropTypes.func,
  handleShowCardDetailModal: PropTypes.func,
  handleMoveCard: PropTypes.func,
  handleListQuickEdit: PropTypes.func
};

export default DropTarget(DragTypes.CARD, ListTarget, collect)(List);
