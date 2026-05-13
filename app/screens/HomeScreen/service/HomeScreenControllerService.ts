export default class HomeScreenControllerService {
    public static current = new HomeScreenControllerService();

    public healthCheck(): boolean {
        return true;
    }
}