import "./Inputs.css";

const Inputs = () => {
  return (
    <div className="containar_inputs">
      <div className="inputs">
         <h1>Add Book:</h1>
        <input id="title" placeholder="Book Title" />
        <input id="isbn" placeholder="ISBN" />
        <input id="pub_Date" placeholder="Publication Date" />
        <input id="author" placeholder="Author Name" />
        <input id="publisher_N" placeholder="Publisher Name" />
        <input id="cover" placeholder="Cover Book" />
        <input id="link_shop" placeholder="Link To Shop" />
        <button id="btn_add">ADD BOOK</button>
      </div>
      <div className="desc_card">
        <input id="description" placeholder="Description" />
        <div className="card">
        </div>
      </div>
    </div>
  );
};

export default Inputs;
