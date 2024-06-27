<%
Set conn = Server.CreateObject("ADODB.Connection")
conn.Open "Provider=Microsoft.Jet.OLEDB.4.0;Data Source=|DataDirectory|/store.mdb"

Set rs = Server.CreateObject("ADODB.Recordset")
rs.Open "Cart", conn, 2, 2

Set shippingInfo = Server.CreateObject("Scripting.Dictionary")
shippingInfo.Add "name", Request.Form("name")
shippingInfo.Add "address", Request.Form("address")
shippingInfo.Add "city", Request.Form("city")
shippingInfo.Add "zip", Request.Form("zip")

For Each item In shippingInfo
    rs.AddNew
    rs("Name") = shippingInfo("name")
    rs("Address") = shippingInfo("address")
    rs("City") = shippingInfo("city")
    rs("Zip") = shippingInfo("zip")
    rs.Update
Next

rs.Close
Set rs = Nothing
conn.Close
Set conn = Nothing

Response.Write("Purchase completed successfully!")
%>
