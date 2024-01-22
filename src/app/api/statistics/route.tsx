// app/api/statistics/route.ts
import { NextRequest, NextResponse } from "next/server";
import { getDBConnection } from '@/components/DBConnectionManager';

export const GET = async (req: NextRequest) => {
  const startDate = req.nextUrl.searchParams.get("startDate")
  const endDate = req.nextUrl.searchParams.get("endDate")

  try {
    const db = await getDBConnection(); // データベース接続
    const results = await db.query(
      `SELECT DATE(processing_date) as date, COUNT(*) as count
       FROM m_work
       WHERE processing_date BETWEEN ? AND ?
       GROUP BY DATE(processing_date)`,
      [startDate, endDate]
    );

    return NextResponse.json(results);
  } catch (error) {
    const error_response = NextResponse.json({
      status: 400,
      message: 'Internal server error'
    });
    return error_response;
  }
};

