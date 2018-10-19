import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import {config} from './config'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    homeData: '',
    financeData: '',
    hotData:'',
    allData:[],
    loadingState: true,
    searchResult:[]
  },

  mutations: {
    getDataHome(state, articles){
      state.homeData = articles;
      state.allData.push(...articles);
    },
    getDataFinance(state, articles){
      
      state.financeData = articles;
      state.allData.push(...articles);
    },
    getDataHot(state, articles){
      
      state.hotData = articles;
      state.allData.push(...articles);
      // console.log(state.allData);
    },
    changeState(state){
      state.loadingState = false;
    },
    searchRes(state, search){
      const searchRes = state.allData.filter( ele =>{
        return ele.title.toLowerCase().includes(search) ;
      })
      state.searchResult = searchRes;
    }
    
  },

  actions: {

    getData: async ({commit})=>{ 

      try{       

        const newsDataTech = await axios.get(`${config.url}${config.apiKey}`);
        const articleTech = newsDataTech.data.articles;
        const newsDataFinance = await axios.get(`${config.urlFin}${config.apiKey}`);
        const articleFinance = newsDataFinance.data.articles;
        const newsDataHot = await axios.get(`${config.urlHot}${config.apiKey}`);
        const articleHot = newsDataHot.data.articles;
        
        commit('changeState'); 
        commit('getDataHome', articleTech);
        commit('getDataFinance', articleFinance);
        commit('getDataHot', articleHot);     

      } catch (err){
        // console.log(err);
        alert(err);
        commit('changeState') ;    

      }
    },
    searchRes: ({commit},search)=>{
      commit('searchRes', search);
      // console.log(search);
    }
  },

  getters:{
    homeData: (state)=>{
      if(state.homeData){
        return state.homeData;
      }
    },
    featureNews:(state)=>{
      if(state.homeData){

        return state.homeData.slice(2,5);
      }
    },
    getallData: state=> id=>{
      return state.allData.find( ele => ele.title === id);
    },
  }
})
