
#include <vector>
using namespace std;

class Solution {
    
    inline static const int NOT_VISITED = 0;
    inline static const int CYCLICAL = 1;
    inline static const int NOT_CYCLICAL = 2;
    
public:
    vector<int> eventualSafeNodes(vector<vector<int>>&graph) {
        if (graph.size() == 0) {
            return vector<int>();
        }

        const size_t size = graph.size();
        vector<int> nodeStatus(size);
        vector<int> allEventualSafeNodes;

        for (int node = 0; node < size; node++) {
            if (depthFirstSearch_nodeIsPartOfCycle(node, graph, nodeStatus) == false) {
                allEventualSafeNodes.push_back(node);
            }
        }
        return allEventualSafeNodes;
    }
    
private:
    bool depthFirstSearch_nodeIsPartOfCycle(int node, const vector<vector<int>>& graph, vector<int>& nodeStatus) {
        if (nodeStatus[node] != NOT_VISITED) {
            return nodeStatus[node] == CYCLICAL;
        }

        nodeStatus[node] = CYCLICAL;
        for (const auto& neigbours : graph[node]) {
            if (depthFirstSearch_nodeIsPartOfCycle(neigbours, graph, nodeStatus)) {
                return true;
            }
        }

        nodeStatus[node] = NOT_CYCLICAL;
        return false;
    }
};
