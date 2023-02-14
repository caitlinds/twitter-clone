//home.ejs

<%- include('./partials/header') %>
<main>
  <h1 class="white-bg"><%= title %></h1>

    <% if (user) { %> 
      <form class="white-bg" method="POST"
        action="/tweets">
        <textarea class="white-bg" name="content"></textarea>
        <br>
        <ul><li id="test"><input id="tweet-btn" type="submit" value="Tweet"></li></ul>
      </form>
      <br> 
      <ul>
        <% user.tweets.forEach(function(t) { %>
            <li class="hdr"><img alt="avatar" class="avatar" src="<%= t.userAvatar %>" referrerpolicy="no-referrer" ><%= t.userName %>
            <%= t.createdAt.toLocaleDateString() %></li>
            <li><%= t.content %></li>
            <form class="white-bg" method="POST" action="/likes/add">
              <textarea class="hidden" name="tweetObjId"><%= t %></textarea>
              <input type="submit" value="Like">
            </form>
          <br>
          <% }); %>
      </ul>
    <% } %>
</main>
<%- include('./partials/footer') %>