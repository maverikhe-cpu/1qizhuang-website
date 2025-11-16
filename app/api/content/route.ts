import { NextResponse } from 'next/server'
import { readFile } from 'fs/promises'
import { join } from 'path'

export async function GET() {
  try {
    const filePath = join(process.cwd(), 'public', 'api', 'content.json')
    const fileContents = await readFile(filePath, 'utf8')
    const contentData = JSON.parse(fileContents)
    return NextResponse.json(contentData)
  } catch (error) {
    console.error('Error reading content.json:', error)
    return NextResponse.json(
      { error: 'Failed to load content' },
      { status: 500 }
    )
  }
}

