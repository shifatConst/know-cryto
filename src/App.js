import React from 'react';
import { Switch, Route, Link } from "react-router-dom";
import './App.css';
import { Layout, Space, Typography } from 'antd';
import { CryptoCurrencies, CryptoDetails, Exchanges, HomePage, Navbar, News } from './components';

const App = () => {
    return (
        <div className="app">
            <div className="navbar">
                <Navbar />
            </div>

            <div className="main">
                <Layout>
                    <div className="routes">
                        <Switch>
                            <Route exact path="/">
                                <HomePage />
                            </Route>
                            <Route exact path="/exChanges">
                                <Exchanges />
                            </Route>
                            <Route exact path="/cryptoCurrencies">
                                <CryptoCurrencies />
                            </Route>
                            <Route exact path="/crypto/:coinId">
                                <CryptoDetails />
                            </Route>
                            <Route exact path="/news">
                                <News />
                            </Route>
                        </Switch>
                    </div>
                </Layout>

                <div className="footer">
                    <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }} >
                        Know Crypto <br />
                        All Right Reserverd
                    </Typography.Title>
                    <Space>
                    </Space>
                    <Link to="/">Home</Link>
                    <Link to="/exchanges">Exchanges</Link>
                    <Link to="/news">News</Link>
                </div>
            </div>

        </div>
    );
};

export default App;