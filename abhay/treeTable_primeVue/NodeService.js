export default class NodeService {

   getTreeTableNodes() {
       return fetch('../../service/treetablenodes.json').then(res => res.json()).then(d => d.data);
   }

}