param(
    [string]$Version = "v1.0.0",
    [string]$Message = "chore(release): bump version to v1.0.0"
)

Write-Host "Publishing release $Version..." -ForegroundColor Cyan

git add .
git commit -m $Message
git tag -a $Version -m "Release $Version"
git push origin main
git push origin $Version

Write-Host "Successfully pushed $Version to remote!" -ForegroundColor Green
