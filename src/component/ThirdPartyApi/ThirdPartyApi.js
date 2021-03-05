import React, { useEffect } from "react";
import BarChart from "./BarChart";
import QueryForm from "./queryForm";
import { connect } from "react-redux";
import { fetchlanguage } from "../../redux/ThirtPartyApi/ThirdPartyApiActions";

const ThirdPartyApi = ({ languages, fetchlanguage }) => {
  useEffect(() => {
    fetchlanguage("abc");
  }, [fetchlanguage]);
  return (
    <>
      <div className="graphContainer">
        <BarChart value={languages.languages.languages.items} />
      </div>
      <QueryForm />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    languages: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchlanguage: () => dispatch(fetchlanguage()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ThirdPartyApi);
