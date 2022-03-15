
import java.util.ArrayList;
import java.util.List;

public class Solution {

    private static final int NOT_VISITED = 0;
    private static final int CYCLICAL = 1;
    private static final int NOT_CYCLICAL = 2;

    public List<Integer> eventualSafeNodes(int[][] graph) {
        if (graph == null || graph.length == 0) {
            return new ArrayList<>();
        }

        final int size = graph.length;
        int[] nodeStatus = new int[size];
        List<Integer> allEventualSafeNodes = new ArrayList<>();

        for (int node = 0; node < size; node++) {
            if (depthFirstSearch_nodeIsPartOfCycle(node, graph, nodeStatus) == false) {
                allEventualSafeNodes.add(node);
            }
        }
        return allEventualSafeNodes;
    }

    private boolean depthFirstSearch_nodeIsPartOfCycle(int node, int[][] graph, int[] nodeStatus) {
        if (nodeStatus[node] != NOT_VISITED) {
            return nodeStatus[node] == CYCLICAL;
        }
        
        nodeStatus[node] = CYCLICAL;
        for (final int neigbours : graph[node]) {
            if (depthFirstSearch_nodeIsPartOfCycle(neigbours, graph, nodeStatus)) {
                return true;
            }
        }

        nodeStatus[node] = NOT_CYCLICAL;
        return false;
    }
}
