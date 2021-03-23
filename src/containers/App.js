import React, { useEffect } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { fetchData } from '../redux/actions';
import Main from '../components/main';


function App({ fetchData, data }) {
  useEffect(() => {
    fetchData()
  }, []);

  return (
    <Main data={data} />
  );
}

const mapStateToProps = state => ({
  data: state.data,
  bag: state.bag
});

export default connect(mapStateToProps, { fetchData })(App);
