package GameConfiguration;

public class MatchmakingClient {

	private String nick;
	private boolean ping;
	
	
	public MatchmakingClient() {
	}
	public MatchmakingClient(String nick) {
		this.nick = nick;
		this.ping = true;;
	}
	public MatchmakingClient(String nick, boolean ping) {
		this.nick = nick;
		this.ping = ping;
	}
	public String getNick() {
		return nick;
	}
	public void setNick(String nick) {
		this.nick = nick;
	}
	public boolean isPing() {
		return ping;
	}
	public void setPing(boolean ping) {
		this.ping = ping;
	}
	
	
	
}
